import { useState } from 'react';

const useBindFields = (initialFields = null) => {
    const [values, updateValues] = useState(initialFields);

    const handlerBindFields = ({ target, }) => {
        const data = target ? { ...values, [target.name]: target.value } : null;
        updateValues(data)
    }

    return { values, updateValues, handlerBindFields };
}

export default useBindFields;
