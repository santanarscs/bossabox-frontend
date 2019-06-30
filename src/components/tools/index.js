import React from "react";

import {
  Container,
  ToolsActions,
  ToolsList,
  TitleList,
  TagList
} from "./styles";

export default function tools() {
  return (
    <Container>
      <h2>Very Useful Tools to Remember</h2>
      <ToolsActions>
        <div>
          <input type="text" placeholder="search" name="searchTerm" />
          <input type="checkbox" name="searchTags" />
          search in tags only
        </div>
        <button type="button">Add</button>
      </ToolsActions>
      <ToolsList>
        <li>
          <TitleList>
            <a href="">Notion</a>
            <button type="button">remover</button>
          </TitleList>
          <p>
            All in one tool to organize teams and ideas. Write plan, collaborate
            and get organized
          </p>
          <TagList>
            <li>#organization</li>
            <li>#planning</li>
            <li>#collaboration</li>
            <li>#writting</li>
            <li>#calendar</li>
          </TagList>
        </li>
        <li>
          <TitleList>
            <a href="">Notion</a>
            <button type="button">remover</button>
          </TitleList>
          <p>
            All in one tool to organize teams and ideas. Write plan, collaborate
            and get organized
          </p>
          <TagList>
            <li>#organization</li>
            <li>#planning</li>
            <li>#collaboration</li>
            <li>#writting</li>
            <li>#calendar</li>
          </TagList>
        </li>
        <li>
          <TitleList>
            <a href="">Notion</a>
            <button type="button">remover</button>
          </TitleList>
          <p>
            All in one tool to organize teams and ideas. Write plan, collaborate
            and get organized
          </p>
          <TagList>
            <li>#organization</li>
            <li>#planning</li>
            <li>#collaboration</li>
            <li>#writting</li>
            <li>#calendar</li>
          </TagList>
        </li>
      </ToolsList>
    </Container>
  );
}
