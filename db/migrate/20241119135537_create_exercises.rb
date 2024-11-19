class CreateExercises < ActiveRecord::Migration[8.0]
  def change
    create_table :exercises, id: :uuid do |t|
      t.belongs_to :task, null: false, foreign_key: true, type: :uuid

      t.timestamps
    end
  end
end
