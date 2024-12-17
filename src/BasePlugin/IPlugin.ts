import { IPlayer } from "./IPlayer";

export interface IPlugin {
    /* Plugin Information */
    id: string,
    name: string,
    description: string,
    version: string,

    /* Plugin Load & Unload Routines */
    activate(): Promise<boolean>, // Progress Update Callbacks?
    deactivate(): Promise<boolean>,

    /* Music Suggestions, Albums, Playlists, etc. */

    /* The Player Object */
    player: IPlayer
}