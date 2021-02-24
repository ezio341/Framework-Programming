import React, {Component} from 'react';
import Image from './Image';

class List extends Component{
    render(){
        return (
<div>
    <ol>
        <li>
            <Image link='https://www.willowsvetgroup.co.uk/wp-content/uploads/2016/11/Kitten-pack.jpg'/>
        </li>
        <li>
            <Image link='https://www.rspcasa.org.au/wp-content/uploads/2019/07/ginger-kittens-2-1024x685.jpg'/>
        </li>
        <li>
            <Image link='https://welovecatsandkittens.com/wp-content/uploads/2015/02/ginger-kitten-3.jpg'/>
        </li>
        <li>
            <Image link='https://ukmadcat.com/wp-content/uploads/2019/04/sleepy-cat.jpg'/>
        </li>
    </ol>
</div>
        );
    }
}
export default List;