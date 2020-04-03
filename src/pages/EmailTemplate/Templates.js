import React, { useState, useEffect } from 'react';

import templateService from "../../services/Template.service";
import { Flex, Card, Topbar, LinkNav } from "../../components";

const Templates = () => {

    const [templates, setTemplates] = useState([]);

    useEffect(() => {
        setTemplates(templateService.get());
    }, []);

    return (
        <>
            <Topbar>
                <h2>Templates</h2>
                <LinkNav to="/template">New Template</LinkNav>
            </Topbar>

            <Flex direction="row">
                {templates && templates.map(({ id, title }) => <Card key={id} id={id} title={title} />)}
            </Flex>
        </>
    );
};

export default Templates;
