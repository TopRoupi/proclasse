class CreateSteps < ActiveRecord::Migration[8.0]
  def change
    create_table :steps, id: :uuid do |t|
      t.belongs_to :exercise, null: false, foreign_key: true, type: :uuid
      t.belongs_to :challenge, null: false, foreign_key: true, type: :uuid
      t.integer :index

      t.timestamps
    end
  end
end
