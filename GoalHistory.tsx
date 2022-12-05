import * as React from 'react';
import game, { Team, GoalListener } from './Game';

interface Goal {
  team: Team;
  time: String;
}

export const GoalHistory: React.FC = () => {
  const [goals, setGoals] = React.useState<Goal[]>([]);

  const onGoalScored: GoalListener = (teamThatScored: Team) => {
    const goal = {
      team: teamThatScored,
      time: Date.now().toString(),
    };

    setGoals((oldGoals) => oldGoals.concat(goal));
  };

  React.useEffect(() => {
    game.attach(onGoalScored);

    // 컴포넌트가 더이상 쓰이지 않을 때 listen 하지 않도록 하자.
    return () => {
      game.detach(onGoalScored);
    };
  }, []);

  return <span>{goals.map(({ team, time }) => `${team} '${time}`)}</span>;
};
