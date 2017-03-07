import React, {PropTypes, Component} from 'react';
import Article from './Article';
import toggleOpenSingle from '../decorators/toggleOpenSingle';

class ArticleList extends Component {
    render() {
        const { articles,
                toggleOpen: toggleOpenArticle,
                openItemId: openArticleId } = this.props;

        const articleComponents = articles.map(article => <li key={article.id}>
            <Article article={article}
                     isOpen={article.id === openArticleId}
                     toggleOpen={toggleOpenArticle(article.id)}
            />
        </li>);

        return (
            <ul>
                {articleComponents}
            </ul>
        );
    }
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
};

export default toggleOpenSingle(ArticleList);
