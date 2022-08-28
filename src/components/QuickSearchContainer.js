import FodCard from './FoodCard';
// import ImageContainer from './ImageContainer';

function QuickSearchContainer() {
    return (
        
        <div> 
            <div>
                {}
                <FodCard defaultSelected={true} cuisine='breakfast' image='https://github.com/DivyashantKumar/staticWebPageCollection/blob/main/images/1image.png?raw=true' />
                <FodCard defaultSelected={true} cuisine='lunch' image='https://github.com/DivyashantKumar/staticWebPageCollection/blob/main/images/2image.png?raw=true' />
                <FodCard defaultSelected={false} cuisine='dinner' image='https://github.com/DivyashantKumar/staticWebPageCollection/blob/main/images/3image.png?raw=true' />
                
            </div>
        </div>
    );
}


export default QuickSearchContainer;
