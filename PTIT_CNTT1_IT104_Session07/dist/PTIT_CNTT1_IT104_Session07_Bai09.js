"use strict";
class CommentC {
    constructor(id, userId, content, replies) {
        this.id = id;
        this.userId = userId;
        this.content = content;
        this.replies = replies;
    }
    addReply(reply) {
        this.replies.push(reply);
    }
}
class User {
    constructor(id, posts, followers) {
        this.id = id;
        this.posts = posts;
        this.followers = followers;
    }
    createPost(content) {
        this.posts.push(content);
    }
    comment(postId, commentContent) {
        const searchPost = this.posts.find((p) => p.id === postId);
        searchPost === null || searchPost === void 0 ? void 0 : searchPost.comments.push(commentContent);
    }
    follow(user) {
        this.followers.push(user);
    }
    likePost(postId) {
        const post = this.posts.find((p) => p.id === postId);
        post === null || post === void 0 ? void 0 : post.addLike(this.id);
    }
    viewFeed() {
        this.followers.forEach((person) => {
            console.log(`-----Bai dang cua ${person.id}-----`);
            person.posts.forEach((ct) => {
                console.log("- ", ct.contest);
            });
        });
    }
}
class Post {
    constructor(id, likes, comments, userId, contest) {
        this.id = id;
        this.likes = likes;
        this.comments = comments;
        this.userId = userId;
        this.contest = contest;
    }
    addLike(userId) {
        this.likes.push(userId);
    }
    addComment(comment) {
        this.comments.push(comment);
    }
}
const user1 = new User(1, [], []);
const user2 = new User(2, [], []);
const user3 = new User(3, [], []);
user1.follow(user2);
user1.follow(user3);
const post1 = new Post(101, [], [], 2, "Hello mọi người! Đây là post đầu tiên của mình.");
user2.createPost(post1);
const post2 = new Post(102, [], [], 3, "Chúc một ngày tốt lành!");
user3.createPost(post2);
user1.likePost(101);
post1.addLike(user1.id);
post2.addLike(user1.id);
const comment1 = new CommentC(1, user1.id, "Bài viết hay quá!", []);
post1.addComment(comment1);
comment1.addReply("Cảm ơn bạn đã chia sẻ!");
user1.viewFeed();
