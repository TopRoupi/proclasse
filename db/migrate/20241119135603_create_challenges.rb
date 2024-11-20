class CreateChallenges < ActiveRecord::Migration[8.0]
  def change
    create_table :challenges, id: :uuid do |t|
      t.belongs_to :user, null: false, foreign_key: true, type: :uuid
      t.string :title
      t.text :problem
      t.integer :difficulty

      t.timestamps
    end
  end
end
