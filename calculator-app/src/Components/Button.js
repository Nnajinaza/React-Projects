export default function Button(props) {
    return (
        <div className='wholeBtn'>
              <div className="buttonRow topRow">
                  <input type="button" value={"AC"} onClick={props.onClick} style={{backgroundColor: 'darkgray', color: 'black'}} className="eachInput"/>
                  <input type="button" value={"Delete"} onClick={props.onClick} style={{backgroundColor: 'darkgray', color: 'black'}} className="eachInput"/>
                  <input type="button" value={"+"} onClick={props.onClick} style={{backgroundColor: 'darkgray', color: 'black'}} className="eachInput"/>
                  <input type="button" value={"-"} onClick={props.onClick} className="eachInput"/>
              </div>
              <div className="buttonRow">
                  <input type="button" value={"1"} onClick={props.onClick} style={{backgroundColor: 'dimgray'}} className="eachInput"/>                
                  <input type="button" value={"2"} onClick={props.onClick} style={{backgroundColor: 'dimgray'}} className="eachInput"/>                
                  <input type="button" value={"3"} onClick={props.onClick} style={{backgroundColor: 'dimgray'}} className="eachInput"/>                
                  <input type="button" value={"*"} onClick={props.onClick} className="eachInput"/>                
              </div>
              <div className="buttonRow">
                  <input type="button" value={"4"} onClick={props.onClick} style={{backgroundColor: 'dimgray'}} className="eachInput"/>
                  <input type="button" value={"5"} onClick={props.onClick} style={{backgroundColor: 'dimgray'}} className="eachInput"/>
                  <input type="button" value={"6"} onClick={props.onClick} style={{backgroundColor: 'dimgray'}} className="eachInput"/>
                  <input type="button" value={"/"} onClick={props.onClick} style={{fontSize: '21px'}} className="eachInput"/>
              </div>
              <div className="buttonRow">
                  <input type="button" value={"7"} onClick={props.onClick} style={{backgroundColor: 'dimgray'}}className="eachInput"/>
                  <input type="button" value={"8"} onClick={props.onClick} style={{backgroundColor: 'dimgray'}}className="eachInput"/>
                  <input type="button" value={"9"} onClick={props.onClick} style={{backgroundColor: 'dimgray'}} className="eachInput"/>
                  <input type="button" value={"%"} onClick={props.onClick} style={{fontWeight: '20px'}} className="eachInput"/>                
              </div>
              <div className="buttonRow">
                  <input type="button" value={"0"} onClick={props.onClick} style={{backgroundColor: 'dimgray'}} className="eachInput"/>
                  <input type="button" value={"."} onClick={props.onClick} style={{backgroundColor: 'dimgray'}} className="eachInput"/>
                  <input type="button" value={"000"} onClick={props.onClick} style={{backgroundColor: 'dimgray'}} className="eachInput"/>
                  <input type="button" value={"="} onClick={props.onClick} style={{fontSize: '21px'}} className="eachInput"/>
              </div>
        </div>
    )
    
}