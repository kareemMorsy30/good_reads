import React from 'react';
import '../../styles/table.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const Table = ({ cols, data }) => {
    return (
        <table id="table">
            <thead>
                <tr>
                    {cols.map((col) => {
                        return (
                            <th>{col}</th>
                        );
                    })}
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {data.map((record) => {
                    return (
                        <tr>
                            {cols.map((col) => {
                                return (
                                    <td>
                                        {typeof record[col] == 'object' && record[col] != null 
                                        ? 
                                        record[col].name 
                                        : 
                                        record[col] == 0 ? "-" : record[col]}
                                    </td>
                                );
                            })}
                            <td className="actions">
                                <a href="#"><FontAwesomeIcon icon={faEdit}/></a>
                                <a href="#"><FontAwesomeIcon icon={faTrash}/></a>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default Table;