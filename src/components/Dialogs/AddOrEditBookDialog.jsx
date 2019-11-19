import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ISO6391 from 'iso-639-1';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ListItemText from '@material-ui/core/ListItemText';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import InfoIcon from '@material-ui/icons/Info';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import {
  makeStyles,
  useTheme,
} from '@material-ui/core/styles';
import { DialogTitleWithClose } from './DialogTitleWithClose';
import { ArrowTooltip } from '../Tooltip/ArrowTooltip';
import { TabPanel } from './TabPanel';
import {
  mapNewlineStringToUniqueArray,
  createInitialValues,
  createMediaTypes,
  mapAuthorsArrayToValuesArray,
  mapValuesArrayToAuthorsArray,
} from './formUtils';
import {
  bookPropTypesShape,
  subjectsPropTypes,
} from '../../propTypes/propTypes';

const EMPTY_VALUES_TEMPLATE = {
  foreName: '',
  middleName: '',
  lastName: '',
  birthYear: '',
  deathYear: '',
};

const TEXT_FIELD_MARGIN = 'dense';
const TEXT_FIELD_VARIANT = 'outlined';

/**
 * The style classes factory function.
 *
 * @returns {Object} The styles object.
 * @memberof AddOrEditBookDialog
 * @private
 */
const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  textField: {
    marginTop: theme.spacing(3),
    marginBottom: 0,
    minWidth: 300,
    maxWidth: 1280,
  },
  menu: {
    width: 200,
  },
  namesLineContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  yearsLineContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
  authorTextField: {
    flexGrow: 0,
    marginTop: theme.spacing(3),
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  divider: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(1.5), // Reset browser default style.
  },
  tabsDivider: {
    marginTop: 0,
    marginBottom: theme.spacing(1),
  },
  grow: {
    flexGrow: 2,
  },
  icon: {
    alignSelf: 'flex-end',
  },
}));

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}

/**
 * @class AddOrEditBookDialog
 * @classdesc A dialog to edit or add a book. For _add_ mode leave out `book` property.
 * @param {Object} props                     - The component props.
 * @property {Object} [props.book]           - The book to _edit_.
 * @property {string[]} props.subjects       - The global subjects.
 * @property {boolean} props.open            - Initial value for dialog open state.
 * @property {Function} props.handleOnSave   - The on save callback.
 * @property {Function} props.handleOnCancel - The on cancel callback.
 */
export function AddOrEditBookDialog({
  book,
  subjects,
  open,
  handleOnSave,
  handleOnCancel,
}) {
  const mediaTypes = createMediaTypes();
  const classes = useStyles();
  // make responsive!
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const commonTextFieldProps = {
    className: classes.textField,
    margin: TEXT_FIELD_MARGIN,
    fullWidth: true,
    variant: TEXT_FIELD_VARIANT,
  };

  const initialValues = createInitialValues(book);
  const [values, setValues] = React.useState(initialValues);

  const initialAuthorValues = mapAuthorsArrayToValuesArray((book && book.authors) || [{ name: '' }]);
  const [authorsStateValues, setAuthorsStateValues] = React.useState(initialAuthorValues);
  const [tabValue, setTabValue] = React.useState(0);

  function handleAddAuthorClick(event) {
    event.preventDefault();
    authorsStateValues.push({ ...EMPTY_VALUES_TEMPLATE }); // clone!
    setAuthorsStateValues([...authorsStateValues]);
  }

  function handleRemoveAuthorClick(index) {
    return function (event) {
      event.preventDefault();
      authorsStateValues.splice(index, 1);
      setAuthorsStateValues([...authorsStateValues]);
    };
  }

  function handleAuthorChange(index, name) {
    return function (event) {
      event.preventDefault();
      const { target: { value } } = event;
      authorsStateValues[index][name] = value;
      setAuthorsStateValues([...authorsStateValues]);
    };
  }

  const handleChange = name => (event) => {
    event.preventDefault();
    let { target: { value } } = event;
    // NOTE: save code instead name!
    if (name === 'languages') {
      value = value.map(isoName => ISO6391.getCode(isoName));
    }
    setValues({ ...values, [name]: value });
  };

  const handleFormatChange = name => (event) => {
    event.preventDefault();
    const { target: { value } } = event;

    values.formats.forEach((format) => {
      if (format.mimetype === name) {
        format.value = value;
      }
    });

    setValues({ ...values });
  };

  function handleTabChange(event, newValue) {
    event.preventDefault();
    setTabValue(newValue);
  }

  /**
   * Resets the form to the initial values.
   *
   * @private
   */
  function handleReset() {
    setValues({ ...initialValues });
    setAuthorsStateValues([...initialAuthorValues]);
  }

  function handleOnSubmit(event) {
    event.preventDefault();
    event.stopPropagation();

    const newBook = { ...values };

    newBook.authors = mapValuesArrayToAuthorsArray(authorsStateValues);

    // Handle multilines
    newBook.bookshelves = mapNewlineStringToUniqueArray(values.bookshelves);

    const formats = {};
    newBook.formats
      .filter(format => format.value !== '')
      .forEach((format) => {
        formats[format.mimetype] = format.value;
      });
    newBook.formats = formats;

    handleOnSave(newBook);
  }

  return (
    <Dialog
      scroll="body"
      fullWidth={true}
      fullScreen={fullScreen}
      open={open}
      onClose={handleOnCancel}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitleWithClose
        id="responsive-dialog-title"
        onClose={handleOnCancel}
      >
        {`${book ? 'Edit' : 'Add new'} book...`}
        {book && (
          <Typography
            color="secondary"
            align="left"
          >
            <i>{book.title}</i>
          </Typography>
        )}
      </DialogTitleWithClose>

      <form
        className={classes.container}
        onSubmit={handleOnSubmit}
        autoComplete="off"
      >
        <DialogContent
          className={classes.container}
          dividers
        >
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="tabs"
          >
            <Tab label="General Info" icon={<InfoIcon />} {...a11yProps(0)} />
            <Tab label="Authors" icon={<GroupAddIcon />} {...a11yProps(1)} />
            <Tab label="Download Links" icon={<SaveAltIcon />} {...a11yProps(2)} />
          </Tabs>
          <Divider
            className={classes.tabsDivider}
            light
          />

          <TabPanel
            value={tabValue}
            index={0}
          >
            <TextField
              id="title"
              label="Title"
              required
              autoFocus // eslint-disable-line jsx-a11y/no-autofocus
              value={values.title}
              onChange={handleChange('title')}
              helperText="The title is required"
              {...commonTextFieldProps}
            />

            <TextField
              id="languages"
              label="Languages"
              select
              value={values.languages.map(isoCode => ISO6391.getName(isoCode))}
              onChange={handleChange('languages')}
              SelectProps={{
                multiple: true,
                renderValue: selected => selected.join(', '),
              }}
              helperText="Select (multiple) language(s)"
              {...commonTextFieldProps}
            >
              {ISO6391.getAllNames().map((name) => { // TODO: all languages is "performance overkill" ;-)
                return (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={values.languages.indexOf(ISO6391.getCode(name)) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                );
              })}
            </TextField>

            <TextField
              id="img"
              label="Image"
              value={values.img}
              onChange={handleChange('img')}
              type={'url'}
              helperText="Enter a URL"
              {...commonTextFieldProps}
            />

            <TextField
              id="bookshelves"
              label="Bookshelves"
              multiline
              rowsMax="120"
              value={values.bookshelves}
              onChange={handleChange('bookshelves')}
              helperText="Press ENTER and add a bookshelf"
              {...commonTextFieldProps}
            />

            <TextField
              id="select-media-type"
              select
              label="Media Type"
              value={values.media_type}
              onChange={handleChange('media_type')}
              SelectProps={{
                MenuProps: {
                  className: classes.menu,
                },
              }}
              helperText="Select the media type"
              {...commonTextFieldProps}
            >
              {mediaTypes.map(item => (
                <MenuItem
                  key={item}
                  value={item}
                >
                  {item}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              id="subjects"
              label="Subjects"
              select
              value={values.subjects}
              onChange={handleChange('subjects')}
              SelectProps={{
                multiple: true,
                renderValue: selected => selected.join(', '),
                MenuProps: {
                  className: classes.menu,
                },
              }}
              helperText="Select (multiple) subject(s)"
              {...commonTextFieldProps}
            >
              {subjects.map(item => (
                <MenuItem key={item} value={item}>
                  <Checkbox checked={values.subjects.indexOf(item) > -1} />
                  <ListItemText primary={item} />
                </MenuItem>
              ))}
            </TextField>
          </TabPanel>

          <TabPanel
            value={tabValue}
            index={1}
          >
            {authorsStateValues.map((authorValues, index) => (
              <Fragment key={`author-${index}`}>
                {(index > 0) && (
                  <Divider
                    className={classes.divider}
                    light
                  />
                )}
                {authorsStateValues.length > 1 && (
                  <Typography component="h5">
                    {`Author No. ${index + 1}`}
                  </Typography>
                )}

                <div className={classes.namesLineContainer}>
                  <TextField
                    required
                    id={`forename-${index}`}
                    label="Forename"
                    value={authorValues.foreName}
                    onChange={handleAuthorChange(index, 'foreName')}
                    helperText="Enter a forename"
                    {...commonTextFieldProps}
                    {...{ className: classes.authorTextField }}
                  />

                  <TextField
                    id={`middlename-${index}`}
                    label="Middlename"
                    value={authorValues.middleName}
                    onChange={handleAuthorChange(index, 'middleName')}
                    helperText="Enter a middlename"
                    {...commonTextFieldProps}
                    {...{ className: classes.authorTextField }}
                  />

                  <TextField
                    required
                    id={`lastname-${index}`}
                    label="Lastname"
                    value={authorValues.lastName}
                    onChange={handleAuthorChange(index, 'lastName')}
                    helperText="Enter a lastname"
                    {...commonTextFieldProps}
                    {...{ className: classes.authorTextField }}
                  />
                </div>

                <div className={classes.yearsLineContainer}>
                  <TextField
                    id={`birthyear-${index}`}
                    label="Year of ★"
                    value={authorValues.birthYear}
                    onChange={handleAuthorChange(index, 'birthYear')}
                    type="number"
                    helperText="Enter year of ★"
                    {...commonTextFieldProps}
                    {...{ className: classes.authorTextField }}
                    fullWidth={false}
                  />

                  <TextField
                    id={`deathyear-${index}`}
                    label="Year of †"
                    value={authorValues.deathYear}
                    onChange={handleAuthorChange(index, 'deathYear')}
                    type="number"
                    helperText="Enter year of †"
                    {...commonTextFieldProps}
                    {...{ className: classes.authorTextField }}
                    fullWidth={false}
                  />

                  <div className={classes.grow} />

                  {(authorsStateValues.length === index + 1) && (
                    <ArrowTooltip title={'Add author'}>
                      <IconButton
                        onClick={handleAddAuthorClick}
                        aria-label="add author"
                      >
                        <PersonAddIcon className={classes.icon} />
                      </IconButton>
                    </ArrowTooltip>
                  )}

                  <ArrowTooltip title={`Remove author${authorsStateValues.length > 1 ? ` #${index + 1}` : ''}`}>
                    <IconButton
                      onClick={handleRemoveAuthorClick(index)}
                      aria-label="remove author"
                    >
                      <DeleteIcon className={classes.icon} />
                    </IconButton>
                  </ArrowTooltip>
                </div>
              </Fragment>
            ))}
          </TabPanel>

          <TabPanel
            value={tabValue}
            index={2}
          >
            {values.formats.map(format => (
              <TextField
                key={format.mimetype}
                id={format.mimetype}
                label={format.name}
                value={format.value}
                onChange={handleFormatChange(format.mimetype)}
                type={'url'}
                helperText="Enter a URL"
                {...commonTextFieldProps}
              />
            ))}
          </TabPanel>
        </DialogContent>

        <DialogActions>
          <Button
            onClick={handleOnCancel}
            color="secondary"
          >
            Cancel
          </Button>
          <Button
            onClick={handleReset}
            type="reset"
            color="secondary"
          >
            Reset
          </Button>
          <Button
            type="submit"
            color="primary"
          >
            Save
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

AddOrEditBookDialog.propTypes = {
  book: bookPropTypesShape,
  subjects: subjectsPropTypes.isRequired,
  open: PropTypes.bool,
  handleOnSave: PropTypes.func.isRequired,
  handleOnCancel: PropTypes.func.isRequired,
};
