import {Column, Entity, ManyToOne, PrimaryGeneratedColumn, Unique} from "typeorm";
import {Post} from "./Post";


@Entity()
@Unique(["name"])
export class Image {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

/*    @Column("longblob",{
        nullable:true,
        name:"photo"})
    photo: Buffer;*/

    @Column()
    photoUrl: string;

    @Column()
    photoDetail: string;

    @ManyToOne(type => Post, post => post.images)
    post: Post;


}
