import React from 'react';
import { Link } from 'react-router-dom';
import {Header, Heading, Ul, Li} from './StyledAdminHeader.js';
import {useSelector} from 'react-redux';

function AdminHeader() {
    const userLogin = useSelector(state => state.userLogin);
    const {userInfo} = userLogin;
    return ( 
        <div>
            <Header>
                <Heading>
                    <h1>Lucid Photography Admin</h1>
                </Heading>
                
                <nav>
                    <Ul>
                        <Li>
                            <Link to="/admin">Admin</Link>
                        </Li>
                        <Li>
                            <Link to = "/admin">New Photo</Link>
                        </Li>
                        <Li>
                            <Link to = "/admin"> New Blog </Link>
                        </Li>
                    </Ul>
                </nav>
            </Header>
        </div>
     );
}

export default AdminHeader;

