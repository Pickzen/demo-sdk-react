import React, { useContext, useState } from 'react';
import { SlideContext } from '../context/SlideContext';
import Cover from '../slides/Cover/Cover';
import Question from '../slides/Question/Question';
import Feedback from '../slides/Feedback/Feedback';
import Form from '../slides/Form/Form';
import End from '../slides/End/End';
import ProgressBar from '../components/ProgressBar/ProgressBar';

const Slide = () => {
    const { slideModel } = useContext(SlideContext);
    const [slideId, setSlideId] = useState(null);

    if (slideId !== slideModel.getId()) setSlideId(slideModel.getId());

    const getSlideView = () => {
        switch (slideModel.getType()) {
            case 'Cover': return <Cover />;
            case 'Question': return <Question />;
            case 'Feedback': return <Feedback />;
            case 'Form': return <Form />;
            case 'End': return <End />;
            default: return null;
        }
    };

    return (
        <div className="pz">
            <ProgressBar/>
            {getSlideView()}
        </div>
    )
};

export default Slide