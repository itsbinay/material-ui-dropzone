import {withStyles} from '@mui/styles';
import {IconButton, SnackbarContent} from '@mui/material'
import {Warning,Info,Error,Close,CheckCircle} from '@mui/icons-material'
import clsx from 'clsx';
import PropTypes from 'prop-types';
import * as React from 'react';

const variantIcon = {
    success: CheckCircle,
    warning: Warning,
    error: Error,
    info: Info,
};

const styles = (theme) => ({
    successAlert: {
        backgroundColor: theme.palette.success.main,
    },
    errorAlert: {
        backgroundColor: theme.palette.error.main,
    },
    infoAlert: {
        backgroundColor: theme.palette.info.main,
    },
    warningAlert: {
        backgroundColor: theme.palette.warning.main,
    },
    message: {
        display: 'flex',
        alignItems: 'center',
        '& > svg': {
            marginRight: theme.spacing(1),
        },
    },
    icon: {
        fontSize: 20,
        opacity: 0.9,
    },
    closeButton: {},
});

function SnackbarContentWrapper(props) {
    const {classes, className, message, onClose, variant, ...other} = props;
    const Icon = variantIcon[variant];

    return (
        <SnackbarContent
            className={clsx(classes[`${variant}Alert`], className)}
            aria-describedby="client-snackbar"
            message={
                <span id="client-snackbar" className={classes.message}>
                    <Icon className={classes.icon} />
                    {message}
                </span>
            }
            action={[
                <IconButton
                    key="close"
                    aria-label="Close"
                    color="inherit"
                    className={classes.closeButton}
                    onClick={onClose}
                >
                    <Close className={classes.icon} />
                </IconButton>,
            ]}
            {...other}
        />
    );
}

SnackbarContentWrapper.propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    message: PropTypes.node,
    onClose: PropTypes.func,
    variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired,
};

export default withStyles(styles, {name: 'MuiDropzoneSnackbar'})(SnackbarContentWrapper);
