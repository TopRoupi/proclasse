class CreateRooms < ActiveRecord::Migration[8.0]
  def change
    create_table :rooms, id: :uuid do |t|
      t.string :code, null: false
      t.string :name, null: false
      t.belongs_to :professor, null: false, foreign_key: true, type: :uuid

      t.timestamps
    end
  end
end
