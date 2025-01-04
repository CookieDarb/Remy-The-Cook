import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default function Recipe(props){
    return(
        <section className="Remy-message recipe-container" aria-live='polite'>
            <h3>Remy's Recipe:</h3>
            <ReactMarkdown children={props.recipe} remarkPlugins={remarkGfm} />
        </section>
    )
}