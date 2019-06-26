import React, { Component } from "react";
import axios from "axios";
import App from './App';
import './css/App.css';
import { AppBar,Toolbar,Typography,CircularProgress, Input } from "@material-ui/core";
import Toaster from "./components/toaster";

class Application extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            loading: false,
            toaster: {
                open: false,
                message: '',
            },
        }
    }

    componentDidMount() {
        this.loadAllData();
    }
    
    loadAllData() {
        var prevState = {...this.state};
        prevState.loading = true;
        axios.get('/api/getAll').then(res => {
            this.setState({
                data: res.data,
                loading:false,
                toaster: {
                    open: false,
                    message: '',
                },
            });
        }).catch(err => {
            console.error(err);
        })
        this.setState(prevState);
    }

    search(e) {
        if(e.keyCode === 13) {
            var prevState = {...this.state};
            var keyword = e.target.value;
            if (keyword && keyword !== '') {
                // Search
                prevState.loading = true;
                prevState.toaster.open = false;
                prevState.toaster.message = '';
                axios.get('/api/search', {params: {keyword: e.target.value}}).then(res => {
                    console.log('Search Result');
                    console.log(res);
                    if(res.data.length  > 0) {
                        prevState.toaster.open = false;
                        prevState.toaster.message= [];
                        prevState.loading = false;
                        prevState.data = res.data;
                        this.setState(prevState);
                    } else {
                        prevState.toaster.open = true;
                        prevState.toaster.message = 
                            `Data not present for the keyword`
                        prevState.loading = false;
                        this.setState(prevState);

                    }
                }).then(err => console.log(err));
                this.setState(prevState);
            } else {
                prevState.toaster.open = true;
                prevState.toaster.message = 'Please type in a keyword';
                prevState.loading = false;
                this.setState(prevState);
            }
        }
    }

    render() {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Typography  variant='h6'>
                        Bug Trac Application
                        </Typography>
                    </Toolbar>
                </AppBar>
                {this.state.loading ? 
                    (<div className='div-progress'>
                        <CircularProgress className='progress' 
                            variant='indeterminate' color='secondary' />
                    </div>):null}
                {(this.state.data.length > 0) ?
                    (<div className={this.state.loading ? "App search-input app-disabled":"App search-input"}>
                        <Input 
                            placeholder='Search using dpr or Task summaries'
                            type='search' fullWidth={true} 
                            onKeyDown={e => this.search(e)}></Input>
                        <App data={this.state.data}></App>
                    </div>):null}
                {this.state.toaster.open ? (<Toaster open={this.state.toaster.open} 
                    message={this.state.toaster.message} ></Toaster>) : null}
            </div>
        )
    }

}

export default Application;