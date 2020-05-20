import {Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {Post} from "./Post";
import {ImageDetails} from "./ImageDetails";

@Entity()
export class Image {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column("longblob",{
        nullable:true,
        name:"photo"})
    photo: Buffer;

    @Column()
    url: string;

    @ManyToOne(type => Post, post => post.images)
    post: Post;

    @OneToOne(type => ImageDetails, details => details.image, {
        cascade: true
    })
    @JoinColumn()
    details: ImageDetails;

}
