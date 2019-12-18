const TimelineItem = props => (
    <section>
        
        <div className='item-title'>
            <h2>{props.itemTitle}</h2>
        </div>
        <div className='item-text'>
            <p>{props.itemText}</p>
            <a>{props.itemLink}</a>
        </div>

    </section>
  );
  
  export default TimelineItem;