import React from 'react';
import { useEffect, useState, useContext, Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import PageTitle from '../components/Typography/PageTitle'
import SectionTitle from '../components/Typography/SectionTitle'
import { Input, HelperText, Label, Select, Textarea } from '@windmill/react-ui'
import CTA from '../components/CTA'
import Instance from '../apis/Instance';
import { MailIcon } from '../icons'

import { AuthContext } from '../context/AuthContext'

import MASForm from '../components/MasForm';
import MASResults from '../components/MasResults';
// import Loading from '../components/Loading';

function Mas() {
    const { authInfo } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [scoreData, setScoreData] = useState({});
    const [message, setMessage] = useState();
    const history = useHistory();

    // useEffect(() => {
    //     if (authInfo.authenticated === false) {
    //         history.push("/logon");
    //     }
    // }, [authInfo.authenticated, history]);

    const handleEvaluate = (selection) => {
        setLoading(true)
        // const endpoint = '/microanalyticScore/modules/riya-heart-va-gb/steps/score';
        // const endpoint = '/microanalyticScore/modules/logistic_regression_renewal_clas';
        const endpoint = '/microanalyticScore/modules/logistic_regression_renewal_clas/steps/score';


        const headers = {
            'Content-Type': 'application/vnd.sas.microanalytic.module.step.input+json',
            'Accept': 'application/vnd.sas.microanalytic.module.step.output+json'
        };
        const formData = { inputs: [] };
        for (let element in selection) {
            const data = selection[element];
            formData.inputs.push({ name: data.variable, value: data.value });
            console.log(formData.inputs);
        };

        Instance.post(endpoint, formData, { headers: headers })
            .then(response => {
                if (response.status === 201 && response.data.executionState === "completed") {
                    const output = {};
                    response.data.outputs.forEach(variable => output[variable.name] = variable.value);
                    setScoreData(output);
                    setLoading(false);
                } else {
                    setMessage("Please try again!");
                }
            });
    };

    return (
        <>
            <Fragment>
                <MASForm onEvaluate={handleEvaluate} />
                {/* <Loading status={loading} /> */}
                {Object.keys(scoreData).length === 0 ? null : <MASResults data={scoreData} message={message} />}
            </Fragment>
        </>

    )
}

export default Mas;