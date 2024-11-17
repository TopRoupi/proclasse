class CreateRoomRequests < ActiveRecord::Migration[8.0]
  def change
    create_table :room_requests, id: :uuid do |t|
      t.boolean :accepted, null: false, default: false
      t.string :identifier, null: false
      t.belongs_to :room, null: false, foreign_key: true, type: :uuid
      t.belongs_to :student, null: false, foreign_key: true, type: :uuid

      t.timestamps
    end

    add_index :room_requests, [:room_id, :identifier], unique: true
  end
end
