import { Component } from 'react';
import { connect } from 'react-redux';

import { Todo, fetchTodos, deleteTodo } from '../actions';
import { StoreState } from '../reducers';

interface AppProps {
  todos: Todo[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}

interface AppState {
  fetching: boolean;
}

export default class _App extends Component<AppProps, AppState> {

  constructor(props: AppProps) {
    super(props);
    this.state = {fetching: false};
  }

  componentDidUpdate(prevProps: AppProps): void {
    if(!prevProps.todos.length && this.props.todos.length) {
      this.setState({fetching: false});
    }
  }

  onButtonClick = (): void => {
  this.props.fetchTodos();
  this.setState({fetching: true});
  };

  onTodoClick = (id: number): void => {
    this.props.deleteTodo(id);
  };

  renderTodos = (): JSX.Element[] => {
    return (
      this.props.todos.map(({ id, title,completed }: Todo) => {
        return <div key={id} onClick={() => this.onTodoClick(id)}>
          <p>{title}</p>
        </div>
      })
    );
  };

  render() {
    return (
      <div>
        <button onClick={this.onButtonClick}>Fetch</button>
        {this.state.fetching ? 'LOADING..' : this.renderTodos()}
      </div>
    );
  };
}

const mapStateToProps = ({todos}: StoreState) => {
  return {todos};
};


export const App = connect(
  mapStateToProps,
  { fetchTodos, deleteTodo }
)(_App);