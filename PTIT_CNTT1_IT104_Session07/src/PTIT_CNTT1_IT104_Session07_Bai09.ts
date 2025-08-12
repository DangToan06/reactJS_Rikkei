class CommentC {
  constructor(
    public id: number,
    public userId: number,
    public content: string,
    public replies: string[]
  ) {}

  addReply(reply: string) {
    this.replies.push(reply);
  }
}

class User {
  constructor(
    public id: number,
    public posts: Post[],
    public followers: User[]
  ) {}
  public createPost(content: Post): void {
    this.posts.push(content);
  }
  public comment(postId: number, commentContent: CommentC): void {
    const searchPost = this.posts.find((p) => p.id === postId);
    searchPost?.comments.push(commentContent);
  }
  public follow(user: User): void {
    this.followers.push(user);
  }
  public likePost(postId: number) {
    const post = this.posts.find((p) => p.id === postId);
    post?.addLike(this.id);
  }
  public viewFeed() {
    this.followers.forEach((person) => {
      console.log(`-----Bai dang cua ${person.id}-----`);
      person.posts.forEach((ct) => {
        console.log("- ", ct.contest);
      });
    });
  }
}

class Post {
  constructor(
    public id: number,
    public likes: number[],
    public comments: CommentC[],
    public userId: number,
    public contest: string
  ) {}

  public addLike(userId: number) {
    this.likes.push(userId);
  }
  public addComment(comment: CommentC) {
    this.comments.push(comment);
  }
}

const user1 = new User(1, [], []);
const user2 = new User(2, [], []);
const user3 = new User(3, [], []);

user1.follow(user2);
user1.follow(user3);

const post1 = new Post(
  101,
  [],
  [],
  2,
  "Hello mọi người! Đây là post đầu tiên của mình."
);
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
