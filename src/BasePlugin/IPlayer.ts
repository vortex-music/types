export interface IPlayer {
    play(): Promise<boolean>,
    pause(): Promise<boolean>
}