export type Team = 'Home' | 'Away';
export type GoalListener = (teamThatScored: Team) => void;

class GameSubject {
  private listeners: GoalListener[] = [];

  public attach(listener: GoalListener) {
    this.listeners.push(listener);
  }

  public detach(listenerToRemove: GoalListener) {
    this.listeners = this.listeners.filter(
      (listener) => listener !== listenerToRemove
    );
  }

  private notify(team: Team) {
    this.listeners.forEach((listener) => listener(team));
  }

  public score(team: Team) {
    this.notify(team);
  }
}

const gameSubject = new GameSubject();

export default gameSubject;
