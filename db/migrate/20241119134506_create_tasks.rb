class CreateTasks < ActiveRecord::Migration[8.0]
  def change
    create_table :tasks, id: :uuid do |t|
      t.date :published_at
      t.date :due_date
      t.integer :weight

      t.timestamps
    end
  end
end
