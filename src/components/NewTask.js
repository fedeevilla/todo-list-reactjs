import React, { Component, Fragment } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add'
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export default class NewTask extends Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false,
            title: '',
            description: '',
            priority: 1
        };
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleChangeTitle(event) {
        this.setState({ title: event.target.value });
    }

    handleChangeDescription(event) {
        this.setState({ description: event.target.value });
    }

    handleChangePriority(event) {
        this.setState({ priority: event.target.value });
    }

    handleAddTask = () => {

        var task = {
            "name": this.state.title,
            "is_done": false,
            "description": this.state.description,
            "priority": this.state.priority,
        }

        this.setState({
            open: false,
            title: '',
            description: '',
            priority: 1
        });

        this.handleClose();
        return this.props.handleAddTask(task);
    };

    render() {

        return (
            <Fragment>
                <Button onClick={this.handleClickOpen} variant="contained" color="secondary">Add a task
                <AddIcon /></Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Add a task</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please enter a title and a description for the new task.
            </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="title"
                            label="Title"
                            variant="outlined"
                            onChange={(event) => this.handleChangeTitle(event)}
                            fullWidth
                        />
                        <TextField
                            onChange={(event) => this.handleChangeDescription(event)}
                            margin="dense"
                            id="description"
                            label="Description"
                            variant="outlined"
                            fullWidth
                        />
                        <FormControl variant="outlined" fullWidth >
                            <InputLabel
                                ref={ref => {
                                    this.InputLabelRef = ref;
                                }}
                                htmlFor="outlined-age-simple"
                            >
                                Priority
          </InputLabel>
                            <Select

                                value={this.state.priority}
                                onChange={(event) => this.handleChangePriority(event)}
                                input={
                                    <OutlinedInput
                                        labelWidth={this.state.priority}
                                        name="age"
                                        id="outlined-age-simple"
                                    />}>
                                <MenuItem value={1}>Low</MenuItem>
                                <MenuItem value={2}>Medium</MenuItem>
                                <MenuItem value={3}>High</MenuItem>
                            </Select>
                        </FormControl>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
            </Button>
                        <Button onClick={() => this.handleAddTask()} color="primary">
                            Add
            </Button>
                    </DialogActions>
                </Dialog>
            </Fragment>
        );
    }
}