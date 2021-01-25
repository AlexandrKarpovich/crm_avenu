import { useContext } from 'react';
import { LeadsContext } from '../../App';
import { useParams, useHistory } from 'react-router-dom';
import { Card } from '@material-ui/core';
import s from './leads.module.css'


export function Lead() {
    const { leads } = useContext(LeadsContext);

    const { id } = useParams(),
        lead = leads.find(item => item.id === Number(id));


    return <div>
        <div>
            Заявка {lead?.title}
        </div>
    </div>
}

function Leads() {
    const { leads } = useContext(LeadsContext);

    const history = useHistory();

    const handleClick = id => {
        history.push(`/leads/${id}`);
    }

    return <div className={s.col}>
        {leads.map( ({ id, title, status, phone }) => <div
            key={id}
            className={s.item}
            onClick={() => handleClick(id)}
        >
            <Card>
                <div className={s.wrapper}>
                    <div>id: {id} - {title} ({status})</div>
                    <div>{phone}</div>
                </div>
            </Card>

        </div>
        )}
    </div>;
};

export default Leads;
