import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Help from './Help';
import Protest from './Protest';
import SelfGovernment from './SelfGovernment';
import './styles.css'; // додайте ваші стилі тут

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: null,
            activeLink: ''
        };
    }

    getContent(url, link) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                this.setState({
                    content: xhr.responseText,
                    activeLink: link // Встановлюємо активний лінк
                });
            }
        };
        xhr.send();
    }

    setActiveLink(link) {
        if (this.state.activeLink !== link) {
            this.setState({ activeLink: link });
        }
    }


    render() {
        const { content, activeLink } = this.state;

        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <NavLink
                                exact
                                to="/"
                                activeClassName="active"
                                className={activeLink === '/' ? 'active' : ''}
                                onClick={() => {
                                    this.getContent('/home/', '/');
                                    this.setActiveLink('/');
                                }}
                            >
                                Дім
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                exact
                                to="/"
                                activeClassName="active"
                                className={activeLink === '/' ? 'active' : ''}
                                onClick={() => {
                                    this.getContent('/about/', '/');
                                    this.setActiveLink('/');
                                }}
                            >
                                Про Україну
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                exact
                                to="/"
                                activeClassName="active"
                                className={activeLink === '/' ? 'active' : ''}
                                onClick={() => {
                                    this.getContent('/help/', '/');
                                    this.setActiveLink('/');
                                }}
                            >
                                Взаємодопопомога
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                exact
                                to="/"
                                activeClassName="active"
                                className={activeLink === '/' ? 'active' : ''}
                                onClick={() => {
                                    this.getContent('/protest/', '/');
                                    this.setActiveLink('/');
                                }}
                            >
                                Протест
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                exact
                                to="/"
                                activeClassName="active"
                                className={activeLink === '/' ? 'active' : ''}
                                onClick={() => {
                                    this.getContent('/selfgovernment/', '/');
                                    this.setActiveLink('/');
                                }}
                            >
                                Самоврядування
                            </NavLink>
                        </li>
                    </ul>

                    <hr />

                    <div dangerouslySetInnerHTML={{ __html: content }} />
                </div>
            </Router>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

