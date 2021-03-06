import React, { SFC } from "react";
import { SubNav, SubNavLink } from "../Common/SubNav";
import { HeroList } from "./HeroList";
import { Route } from "react-router";
import { ShardPage } from "./Shard/ShardPage";
import { SkillPage } from "./Skill/SkillPage";
import { StoryPage } from "./Story/StoryPage";
import { useAccountPath } from "../../modules/account/hooks";

const SubPages: (SubNavLink & { component: any })[] = [
  {
    label: "式神列表",
    to: "/hero",
    component: HeroList
  },
  {
    label: "碎片",
    to: "/hero/shard",
    component: ShardPage
  },
  {
    label: "技能升级",
    to: "/hero/skill",
    component: SkillPage
  },
  {
    label: "传记解锁",
    to: "/hero/story",
    component: StoryPage
  }
];

export const HeroPage: SFC = props => {
  const accountPath = useAccountPath();
  return (
    <div className="yyx-full-height yyx-layout row">
      <div className="item yyx-nav-left">
        <SubNav links={SubPages} />
      </div>
      <div className="item yyx-content yyx-content-scroll">
        <div className="yyx-padding">
          {SubPages.map(page => (
            <Route
              key={page.to}
              path={`${accountPath}${page.to}`}
              exact={page.to === "/hero"}
              component={page.component}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
