groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|string|null: false|
|password|string|null: false|


### Association
- has_many :comments
<<<<<<< Updated upstream
- has_many :groups
=======
- has_many :groups, through: :groups_users
>>>>>>> Stashed changes

commentsテーブル

|Column|Type|Options|
|------|----|-------|
|image|text||
<<<<<<< Updated upstream
|text|text||
=======
>>>>>>> Stashed changes
|text|text|null: false|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

groupsテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
<<<<<<< Updated upstream
- belongs_to :group
- belongs_to :user
=======
- has_many :groups_users
- has_many :users, through: :groups_users
- has_many ：comments
>>>>>>> Stashed changes
