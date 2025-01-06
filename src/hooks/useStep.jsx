import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export function useStep(maxStep, pageNum) {

    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams({ step: 0 });
    const step = parseInt(searchParams.get('step') || 0);

    useEffect(() => {
        const handleKeydown = (e) => {
            switch (e.key) {
                case 'ArrowLeft': stepSub(); break;
                case 'ArrowRight': stepAdd(); break;
            }
        }
        window.addEventListener('keydown', handleKeydown);
        return () => {
            window.removeEventListener('keydown', handleKeydown)
        };
    }, [searchParams]);

    useEffect(() => {
        if (step > maxStep)
            setSearchParams({ step: maxStep });
        if (step < 0)
            setSearchParams({ step: 0 });
    }, [searchParams]);

    function stepAdd() {
        let newStep = step;
        if (step <= maxStep)
            newStep = step + 1;
        else
            newStep = step;

        if (newStep > maxStep) {
            setSearchParams({ step: maxStep });
            navigate('/' + (pageNum + 1) + '?step=0');
        }
        else
            setSearchParams({ step: newStep });
    }

    function stepSub() {
        let newStep = step;
        if (step >= 0)
            newStep = step - 1;
        else
            newStep = step;

        if (newStep < 0) {
            setSearchParams({ step: 0 });
            if (pageNum > 1)
                navigate('/' + (pageNum - 1) + '?step=1000');
            else
                navigate('/');
        }
        else
            setSearchParams({ step: newStep });
    }

    return { step, stepAdd, stepSub };
}