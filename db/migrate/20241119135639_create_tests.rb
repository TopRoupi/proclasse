class CreateTests < ActiveRecord::Migration[8.0]
  def change
    create_table :tests, id: :uuid do |t|
      t.string :expected_out
      t.string :input
      t.boolean :hidden
      t.boolean :disabled
      t.belongs_to :challenge, null: false, foreign_key: true, type: :uuid

      t.timestamps
    end
  end
end
