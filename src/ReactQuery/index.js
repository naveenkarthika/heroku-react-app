import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import './Styles.css';
import { HomePage } from "./HomePage";
import { RQSuperHeroesPage } from "./RQSuperHeroesPage";
import { SuperHeroesPage } from "./SuperHeroesPage";
import { RQSuperHeroPage } from "./RQSuperHeroPage";
import { ParallelQueriesPage } from "./ParallelQueriesPage";
import { DynamicParallelPage } from "./DynamicParallelPage";
import { DependentQueriesPage } from "./DependentQueriesPage";


const queryClient = new QueryClient();

function ReactQuery() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/super-heroes">Traditional Super Heroes</Link>
                </li>
                <li>
                  <Link to="/rq-super-heroes">RQ Super Heroes</Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route exact path="/super-heroes">
                <SuperHeroesPage />
              </Route>
              <Route exact path="/rq-super-heroes">
                <RQSuperHeroesPage />
              </Route> 
              <Route exact path='/rq-super-heroes/:heroId'>
                <RQSuperHeroPage />
              </Route>
              <Route path='/rq-parallel'>
                <ParallelQueriesPage />
              </Route>
              <Route path='/rq-dynamic-parallel'>
                <DynamicParallelPage heroIds={[1, 3]} />
              </Route>
              <Route path='/rq-dependent'>
                <DependentQueriesPage email='naveen@example.com' />
              </Route>
            {/*
            <Route path='/rq-paginated'>
              <PaginatedQueriesPage />
            </Route>
            <Route path='/rq-infinite'>
              <InfiniteQueriesPage />
            </Route> */}
              <Route exact path="/">
                <HomePage />
              </Route>
            </Switch>
          </div>
        </Router>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </>
  );
}

export default ReactQuery;
