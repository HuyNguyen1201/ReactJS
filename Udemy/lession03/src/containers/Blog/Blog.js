import React, { Component } from 'react';
// import axios from 'axios';
import { Fragment } from 'react'
import { Route, NavLink, Switch } from 'react-router-dom'
import './Blog.css';
import Posts from './Posts/Posts'
// import NewPost from './NewPost/NewPost'
import asyncComponent from './../../hoc/asyncComponent';

const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost')
})

class Blog extends Component {

    state = {
        auth: true
    }


    render() {

        return (
            <Fragment>
                <div className="Blog">
                    <header>
                        <nav>
                            <ul>
                                <li><NavLink
                                    to="/posts"
                                    exact
                                    activeClassName="my-active"
                                    activeStyle={{
                                        color: '#fa923f',
                                        textDecoration: 'underline'
                                    }}
                                >Post</NavLink></li>
                                <li><NavLink to={{
                                    pathname: '/new-post',
                                    hash: '#submit',
                                    search: '?quick-submit=true'
                                }}>New Post</NavLink></li>
                            </ul>
                        </nav>
                    </header>

                </div>
                <Switch>
                    {this.state.auth ? <Route path="/new-post" component={AsyncNewPost} ></Route> : null}
                    <Route path="/posts" component={Posts} ></Route>
                    <Route render={() => <h1>Not found</h1>}></Route>
                    {/* <Redirect from='/' to="/posts"></Redirect> */}
                </Switch>

            </Fragment>
        );
    }
}

export default Blog;