import { selectCollection } from '../../redux/shop/shop.selector';

import CollectionItem from '../../components/collection-item/Collection-item.component';

import './Collection.styles.scss';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const CollectionPage = () => {
  const { collectionId } = useParams();
  const collection = useSelector(selectCollection(collectionId));

  const { title, items } = collection;
  return (
        <div className='collection-page'>
        <h2 className="title">{title}</h2>
        <div className="items">
          {items.map( item => (
             <CollectionItem key={item.id} item={item} />
           ))}
        </div>
        </div>
)}

export default CollectionPage
