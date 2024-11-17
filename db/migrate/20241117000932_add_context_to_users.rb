class AddContextToUsers < ActiveRecord::Migration[8.0]
  def change
    add_column :users, :context, :integer, null: true
  end
end
