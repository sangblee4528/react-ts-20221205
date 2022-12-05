import * as React from 'react';
import game, { Team, GoalListener } from './Game';

interface Score {
  home: number;
  away: number;
}

const onGoalScored = (score: Score, team: Team) => {
  if (team === 'Home') {
    return {
      home: score.home + 1,
      away: score.away,
    };
  }

  return {
    home: score.home,
    away: score.away + 1,
  };
};

export const ScoreBoard: React.FC = () => {
  const [score, dispatch] = React.useReducer(onGoalScored, {
    home: 0,
    away: 0,
  });

  React.useEffect(() => {
    game.attach(dispatch as GoalListener);

    // 컴포넌트가 더이상 쓰이지 않을 때 listen 하지 않도록 하자.
    return () => {
      game.detach(dispatch);
    };
  }, []);

  return (
    <span>
      {`Hmoe = ${score.home}`}
      {`Away = ${score.away}`}
    </span>
  );
};
