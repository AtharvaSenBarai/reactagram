import { useFirestore } from 'reactfire';
import { UserCardComponent } from '../userProfiles/UserCardComponent';
import { PostCaptionComponent } from './PostCaptionComponent';
import { PostCommentsComponent } from './PostCommentsComponent';
import { PostTimeComponent } from './PostTimeComponent';
import { AddCommentCompoennt } from './AddCommentComponent';
import { PostCardWrapper, PostCard, PostInfo } from '../../styled-components/postStyles';
import { ImageWrapper, Icon, UploadedImage } from '../../styled-components/imageStyles';
import { handleLike } from '../../helper-functions/handleLike';
import { useGetUser } from '../../helper-functions/useGetUser';
import { PostType } from '../../types';
import heartIcon from '../../images/heartIcon.svg';
import heartIconRed from '../../images/heartIconRed.svg';

interface PostCardComponentProps {
	post: PostType;
}

export const PostCardComponent = ({ post }: PostCardComponentProps) => {
	const userCollectionQuery = useFirestore().collection('users');
	const postCollectionQuery = useFirestore().collection('posts');

	const currentUser = useGetUser('currentUser');
	const poster = useGetUser(post.poster);

	const targetUserLikes = [...currentUser.likes];

	return (
		<>
			{post !== undefined && (
				<PostCardWrapper>
					<PostCard>
						<PostInfo>
							<UserCardComponent key={post.postID} user={poster} />
							{post.location && <p style={{ textAlign: 'start' }}>{post.location}</p>}
						</PostInfo>
						<ImageWrapper
							onDoubleClick={() =>
								handleLike(post, userCollectionQuery, postCollectionQuery, currentUser)
							}
						>
							<UploadedImage src={post.image} alt={`${post.poster}'s upload`} />
						</ImageWrapper>
						<ImageWrapper
							onClick={() =>
								handleLike(post, userCollectionQuery, postCollectionQuery, currentUser)
							}
						>
							<Icon
								alt='Like button'
								src={targetUserLikes.includes(post.postID) ? heartIconRed : heartIcon}
								style={{ marginLeft: '10px' }}
							/>
							{post.likers.length > 0 && post.likers.length}
						</ImageWrapper>
						{post.caption && <PostCaptionComponent post={post} />}
						<PostCommentsComponent post={post} currentUser={currentUser} />
						<PostTimeComponent post={post} />
						<AddCommentCompoennt
							post={post}
							currentUser={currentUser}
							postCollectionQuery={postCollectionQuery}
						/>
					</PostCard>
				</PostCardWrapper>
			)}
		</>
	);
};
