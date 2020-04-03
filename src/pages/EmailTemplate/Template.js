import React, { useRef, useState } from 'react';
import EmailEditor from 'react-email-editor';

import templateService from "../../services/Template.service";
import { Flex, Button, Topbar, Input, LinkNav } from "../../components";
import { useEffect } from 'react';

const Template = ({ match, history }) => {

    const id = match.params.id;
    const editor = useRef(null);
    const [title, setTitle] = useState('');
    const [editorLoaded, seteditorLoaded] = useState(false);

    useEffect(() => {
        if (id) {
            let temp = templateService.get(id);
            setTitle(temp.title);
            // Error: unlayer is not define. when un-comment below line
            // editor.current.loadDesign(temp);
        }
    }, [id])

    const handleChange = event => setTitle(event.target.value);
    const onDesignLoad = () => seteditorLoaded(true);

    const saveTemplate = () => {
        editor.current.saveDesign(design => {
            templateService.post({ ...design, title, id });
            history.push('/');
        });
    }

    return (
        <>
            <Topbar>
                <Input type="text" placeholder="Template Name..." value={title} onChange={handleChange} />
                <Flex>
                    {editorLoaded && <Button onClick={saveTemplate}>Save Template</Button>}
                    <LinkNav to="/">Back</LinkNav>
                </Flex>
            </Topbar>
            <EmailEditor
                ref={editor}
                minHeight="calc(100vh - 85px)"
                onDesignLoad={onDesignLoad}
            />
        </>
    );
};

export default Template;
