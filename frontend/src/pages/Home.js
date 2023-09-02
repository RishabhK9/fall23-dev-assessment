import React from 'react';
import {database} from '../database.js';

function Home() {
    return (
        <div className="App">
          <table>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Rating</th>
                        <th>Status</th>
                        <th>Hero Project</th>
                    </tr>
                    {database.map((val, key) => {
                        return (
                            <tr key={key}>
                                <td>{val.name}</td>
                                <td>{val.email}</td>
                                <td>{val.phone}</td>
                                <td>{val.rating}</td>
                                <td>{val.status}</td>
                                <td>{val.hero_project}</td>
                            </tr>
                        )
                    })}
                </table>
        </div>
      );
}

export default Home;
