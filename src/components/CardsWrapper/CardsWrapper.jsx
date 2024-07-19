import './CardsWrapper.css'
import CalculatorIcon from '../../assets/images/icon-calculator.svg'
import KarmaIcon from '../../assets/images/icon-karma.svg'
import SupervisorIcon from '../../assets/images/icon-supervisor.svg'
import TeamBuilderIcon from '../../assets/images/icon-team-builder.svg'
import Card from '../Card/Card'
function CardsWrapper(){
    var cards = [
        {id:1 ,title:"Supervisor", description:"Monitors activity to identify project roadblocks", icon:SupervisorIcon , border: 'cyan'},
        {id:2 ,title:"Team Builder", description:"Scans our talent network to create the optimal team for your project", icon:TeamBuilderIcon , border:'red'},
        {id:3 ,title:"Karma", description:"Regularly evaluates our talent to ensure quality", icon:KarmaIcon , border:'orange'},
        {id:4 ,title:"Calculator", description:"Uses data from past projects to provide better delivery estimates", icon:CalculatorIcon , border:'blue'},
    ]
    return(
        <section id='Cards'>
              {
                cards.map(card=>{
                    return(
                        <Card Title={card.title} Description={card.description} Icon={card.icon} Border={card.border} key={card.id}/>
                    )
                })
              }
        </section>
    )
}
export default CardsWrapper;