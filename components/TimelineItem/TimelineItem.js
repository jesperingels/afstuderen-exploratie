import Link from 'next/link';

const TimelineItem = props => (
    <section>

        <div className='item-title'>
            <h2>{props.itemTitle}</h2>
            <img src={props.imgSrc}/>
        </div>
        <div className='item-text'>
            <p>{props.itemText}</p>
            <Link href={props.linkHref}>
                <a>{props.linkText}</a>
            </Link>
            
        </div>

    </section>
  );
  
  export default TimelineItem;