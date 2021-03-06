import React, { Component } from "react";

const id = (function*() {
  let i = 1;
  while (true) {
    yield i;
    i += 1;
  }
})();

export default class MyFeature extends Component {
  state = {
    articles: [
      {
        id: id.next(),
        title: "Article 1",
        summary: "Article 1 Summary",
        display: "none"
      },
      {
        id: id.next(),
        title: "Article 2",
        summary: "Article 2 Summary",
        display: "none"
      },
      {
        id: id.next(),
        title: "Article 3",
        summary: "Article 3 Summary",
        display: "none"
      },
      {
        id: id.next(),
        title: "Article 4",
        summary: "Article 4 Summary",
        display: "none"
      }
    ],
    title: "",
    summary: ""
  };
// onChangeTitle y onChangeSummary, simplemente actualizan con el INPUT del usuario
  onChangeTitle = e => {
    this.setState({ title: e.target.value });
  };

  onChangeSummary = e => {
    this.setState({ summary: e.target.value });
  };

  onClickAdd = () => {
    // agrega un nuevo articulo a STATE, el cual es un array
    // el spread operator ... se usa para construir un nuevo array, basado en uno que ya existe
    this.setState(state => ({
      articles: [
        ...state.articles,
        {
          id: id.next(),
          title: state.title,
          summary: state.summary,
          display: "none"
        }
      ],
      title: "",
      summary: ""
    }));
  };

  onClickRemove = id => {
    this.setState(state => ({
      ...state,
      articles: state.articles.filter(article => article.id !== id)
    }));
  };

  onClickToggle = id => {
    this.setState(state => {
      // 2 operaciones inmutables a continuacion
      // con el SPREAD OPERATOR ..., se completan las propiedades de los articulos
      const articles = [...state.articles];
      const index = articles.findIndex(article => article.id === id);

      // la propiedad display se evalua si tiene valor para mostrar o no
      articles[index] = {
        ...articles[index],
        display: articles[index].display ? "" : "none"
      };

      return { ...state, articles };
    });
  };

  render() {
    const { articles, title, summary } = this.state;

    return (
      <section>
        <header>
          <h1>Articles</h1>
          <input
            placeholder="Title"
            value={title}
            onChange={this.onChangeTitle}
          />
          <input
            placeholder="Summary"
            value={summary}
            onChange={this.onChangeSummary}
          />
          <button onClick={this.onClickAdd}>Add</button>
        </header>
        <article>
          <ul>
            {articles.map(i => (
              <li key={i.id}>
                <a
                  href={`#${i.id}`}
                  title="Toggle Summary"
                  onClick={this.onClickToggle.bind(null, i.id)}
                >
                  {i.title}
                </a>
                &nbsp;
                <a
                  href={`#${i.id}`}
                  title="Remove"
                  onClick={this.onClickRemove.bind(null, i.id)}
                >
                  &#10007;
                </a>
                <p style={{ display: i.display }}>{i.summary}</p>
              </li>
            ))}
          </ul>
        </article>
      </section>
    );
  }
}
