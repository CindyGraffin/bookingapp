import './featured.css';

const Featured = () => {
	return (
        <div className='featured'>
            <div className="featured-item">
                <img src="https://images.unsplash.com/photo-1596436889106-be35e843f974?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" className='featured-img'/>
                <div className="featured-titles">
                    <h1>Hawaï</h1>
                    <h2>423 hébergements</h2>
                </div>
            </div>
            <div className="featured-item">
                <img src="https://images.unsplash.com/photo-1568084680786-a84f91d1153c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" alt="" className='featured-img' />
                <div className="featured-titles">
                    <h1>Minorque</h1>
                    <h2>567 hébergements</h2>
                </div>
            </div>
            <div className="featured-item">
                <img src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" className='featured-img'/>
                <div className="featured-titles">
                    <h1>Dubaï</h1>
                    <h2>945 hébergements</h2>
                </div>
            </div>
        </div>
    );
};

export default Featured;
