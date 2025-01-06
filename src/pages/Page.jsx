import './Page.css'
import Header from '../Header'

function Page(props) {

    const { title, stepAdd, stepSub, children } = props

    return (
        <>
            <Header title={title} />
            <div className='page'>
                <div className='content'>
                    {children}
                </div>
            </div>
            <button className='prev_btn' onClick={stepSub} />
            <button className='next_btn' onClick={stepAdd} />
        </>
    );
}

export default Page;