import React, { useEffect, useState } from 'react';
import game, { Team, GoalListener } from './Game';

interface Goal {
  team: Team;
  time: String;
}

export const GoalHistory: React.FC = () => {
  const [goals, setCoals] = useState<Goal[]>([]);

  const onGoalScored: GoalListener = (teamThatScored: Team) => {
    const goal = {};
  };
};
