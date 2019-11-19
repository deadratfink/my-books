/**
 * @module form-utils
 * @desc A utility module for fomrms.
 */

/**
 * A template for book form values.
 * @memberof form-utils
 * @constant
 * @private
 */
const BOOK_VALUES_TEMPLATE = {
  title: '',
  authors: [],
  img: 'https://placekitten.com/g/200/300',
  bookshelves: '',
  formats: createBookFormatValues(),
  languages: ['en'],
  media_type: 'Text',
  subjects: [],
  // not editable but part of model:
  download_count: 0,
  // HINT: "id" is added later once created in DB!
};

/**
 * Creates the book formats form values.
 *
 * @param {Object} [formats] - Optionally provides initial values for URLs.
 * @returns {Object[]} - The book formats form values.
 * @memberof form-utils
 */
export function createBookFormatValues(formats) {
  const formatValues = [
    {
      name: 'Download Image (JPEG)',
      mimetype: 'image/jpeg',
      value: formats && formats['image/jpeg'] ? formats['image/jpeg'] : '',
    },
    {
      name: 'Download Text (UTF-8)',
      mimetype: 'text/plain; charset=utf-8',
      value: formats && formats['text/plain; charset=utf-8'] ? formats['text/plain; charset=utf-8'] : '',
    },
    {
      name: 'Download Text (ISO-8859-1)',
      mimetype: 'text/plain; charset=iso-8859-1',
      value: formats && formats['text/plain; charset=iso-8859-1'] ? formats['text/plain; charset=iso-8859-1'] : '',
    },
    {
      name: 'Download Text (US-ASCII)',
      mimetype: 'text/plain; charset=us-ascii',
      value: formats && formats['text/plain; charset=us-ascii'] ? formats['text/plain; charset=us-ascii'] : '',
    },
    {
      name: 'Download RDF (XML)',
      mimetype: 'application/rdf+xml',
      value: formats && formats['application/rdf+xml'] ? formats['application/rdf+xml'] : '',
    },
    {
      name: 'Download PDF',
      mimetype: 'application/pdf',
      value: formats && formats['application/pdf'] ? formats['application/pdf'] : '',
    },
    {
      name: 'Download Mobipocket',
      mimetype: 'application/x-mobipocket-ebook',
      value: formats && formats['application/x-mobipocket-ebook'] ? formats['application/x-mobipocket-ebook'] : '',
    },
    {
      name: 'Download Epub (ZIP)',
      mimetype: 'application/epub+zip',
      value: formats && formats['application/epub+zip'] ? formats['application/epub+zip'] : '',
    },
    {
      name: 'Download HTML',
      mimetype: 'text/html; charset=utf-8',
      value: formats && formats['text/html; charset=utf-8'] ? formats['text/html; charset=utf-8'] : '',
    },
    {
      name: 'Download Zip',
      mimetype: 'application/zip',
      value: formats && formats['application/zip'] ? formats['application/zip'] : '',
    },
    {
      name: 'Download TeX',
      mimetype: 'application/prs.tex',
      value: formats && formats['application/prs.tex'] ? formats['application/prs.tex'] : '',
    },
  ];

  return formatValues;
}

/**
 * Create the (static) media types array.
 *
 * @returns {string[]} - The media types array.
 * @memberof form-utils
 */
export function createMediaTypes() {
  return ['Text', 'Audio'];
}

/**
 * An array `filter` function to allow only unique values inside the array.
 *
 * @param {*} value - The currently selected value of the array.
 * @param {number} index - The currently selected index of the array.
 * @param {Array} array - The array which should have only unique values.
 * @memberof form-utils
 */
export function onlyUniqueArrayFilter(value, index, array) {
  return array.indexOf(value) === index;
}

/**
 * Maps a string array to map to the newline (`nl`) separated string.
 *
 * @param {string[]} array - The array to map to the newline (`nl`) separated string.
 * @returns {string} The newline (`nl`) separated string.
 * @memberof form-utils
 */
export function mapArrayToUniqueNewlineString(array) {
  return array
    .map(entry => (entry ? entry.trim() : entry))
    .filter(onlyUniqueArrayFilter) // only unique entries!
    .join('\n');
}

/**
 * Maps a newline (`nl`) separated string to a string array. If not set an empty array is returned.
 *
 * @param {string} [value] - A newline (`nl`) separated string.
 * @returns {string[]} The newline (`nl`) separated string or if value is not set an empty array
 * @memberof form-utils
 */
export function mapNewlineStringToUniqueArray(value) {
  if (value) {
    return value
      .split('\n')
      .map(entry => entry.trim())
      .filter(onlyUniqueArrayFilter); // only unique entries!
  }
  return [];
}

/**
 * Creates initial form values for a given book or if not set a special template
 * for an empty book form entry.
 *
 * @param {Object} [book] - The book which provides the book form values. If not set a
 *                          special template for an empty book form entry is returned.
 * @memberof form-utils
 */
export function createInitialValues(book) {
  if (book) {
    const values = JSON.parse(JSON.stringify(book)); // clone book: do not change the original!
    Object.keys(values).forEach((key) => {
      const value = values[key];

      // TODO just check for bookshelves?
      if (
        key !== 'subjects' &&
        key !== 'languages' &&
        Array.isArray(values[key]) &&
        values[key].length &&
        typeof values[key][0] === 'string'
      ) {
        values[key] = mapArrayToUniqueNewlineString(value);
      }
    });
    // prevent null pointers!
    const initialValues = Object.assign({}, BOOK_VALUES_TEMPLATE, values);
    initialValues.formats = createBookFormatValues(book.formats);
    return initialValues;
  }
  // create new (empty) book values
  return { ...BOOK_VALUES_TEMPLATE }; // clone!
}

export function mapAuthorToValues(author) {
  const names = author.name.split(', ');
  const foreAndMiddlename = names.length > 1 ? names[1].split(' ') : '';
  const foreName = foreAndMiddlename[0];
  const middleName = foreAndMiddlename.length > 1 ? foreAndMiddlename.slice(1).join(' ') : '';
  return {
    foreName,
    middleName,
    lastName: names[0],
    birthYear: author.birth_year,
    deathYear: author.death_year,
  };
}

export function mapValuesToAuthor(authorValues) {
  return {
    name: `${authorValues.lastName}, ${authorValues.foreName}${authorValues.middleName ? ` ${authorValues.middleName}` : ''}`,
    birth_year: typeof authorValues.birthYear === 'string' && authorValues.birthYear.trim() === '' ? undefined : parseInt(authorValues.birthYear, 10),
    death_year: typeof authorValues.deathYear === 'string' && authorValues.deathYear.trim() === '' ? undefined : parseInt(authorValues.deathYear, 10),
  };
}

export function mapAuthorsArrayToValuesArray(authors) {
  return authors.map(author => mapAuthorToValues(author));
}

export function mapValuesArrayToAuthorsArray(values) {
  return values.map(authorValues => mapValuesToAuthor(authorValues));
}
